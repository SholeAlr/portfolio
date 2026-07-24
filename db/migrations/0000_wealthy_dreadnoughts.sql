CREATE TYPE "public"."created_by_type" AS ENUM('owner', 'visitor');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('suggested', 'exploring', 'building', 'shipped', 'archived');--> statement-breakpoint
CREATE TABLE "board_item_labels" (
	"board_item_id" integer NOT NULL,
	"label_id" integer NOT NULL,
	CONSTRAINT "board_item_labels_board_item_id_label_id_pk" PRIMARY KEY("board_item_id","label_id")
);
--> statement-breakpoint
CREATE TABLE "board_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"status" "status" DEFAULT 'suggested' NOT NULL,
	"created_by_type" "created_by_type" DEFAULT 'visitor' NOT NULL,
	"creator_name" text,
	"creator_email" text,
	"demo_url" text,
	"github_url" text,
	"blog_url" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "labels" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "labels_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "votes" (
	"id" serial PRIMARY KEY NOT NULL,
	"board_item_id" integer NOT NULL,
	"visitor_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "board_item_labels" ADD CONSTRAINT "board_item_labels_board_item_id_board_items_id_fk" FOREIGN KEY ("board_item_id") REFERENCES "public"."board_items"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "board_item_labels" ADD CONSTRAINT "board_item_labels_label_id_labels_id_fk" FOREIGN KEY ("label_id") REFERENCES "public"."labels"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "votes" ADD CONSTRAINT "votes_board_item_id_board_items_id_fk" FOREIGN KEY ("board_item_id") REFERENCES "public"."board_items"("id") ON DELETE cascade ON UPDATE no action;