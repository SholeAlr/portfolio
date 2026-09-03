"use client";

import { BootSequence } from "./components/BootSequence";
import { ContactForm } from "./components/ContactForm";
import { TransmissionSuccess } from "./components/TransmissionSuccess";
import { OtherChannels } from "./components/OtherChannels";
import { SystemInfo } from "./components/SystemInfo";
import { useContactProtocol } from "./hooks/useContactProtocol";

export default function ContactPage() {
  const {
    stage,
    bootIndex,
    bootLines,
    name,
    email,
    message,
    transmissionId,
    error,
    inputRef,
    setName,
    setEmail,
    setMessage,
    handleNameSubmit,
    handleEmailSubmit,
    handleMessageSubmit,
  } = useContactProtocol();

  return (
    <main className='relative min-h-screen overflow-hidden bg-[#1d232a] text-white'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute left-1/2 top-[25%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[140px]' />

        <div className='absolute right-[-150px] top-[40%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px]' />

        <div className='absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]' />
      </div>

      <div className='relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-12 md:px-10 lg:px-12'>
        <header className='mb-20 flex items-center justify-between'>
          <span className='font-mono text-xs tracking-[0.25em] text-white/40'>
            CONTACT_PROTOCOL / V1.0
          </span>

          <div className='flex items-center gap-2 font-mono text-xs text-white/40'>
            <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400' />
            ONLINE
          </div>
        </header>

        <section className='mb-16 max-w-3xl'>
          <p className='mb-5 font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-300/70'>
            Communication channel
          </p>

          <h1 className='text-5xl font-medium tracking-[-0.04em] text-white md:text-7xl lg:text-8xl'>
            Let&apos;s talk.
          </h1>

          <p className='mt-7 max-w-xl text-lg leading-relaxed text-white/50 md:text-xl'>
            Have an interesting idea, a product to build, a problem that needs
            solving, or just want to say hi?
            <br />
            <span className='text-white/80'>Send me a signal.</span>
          </p>
        </section>

        <section className='relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl shadow-black/20 backdrop-blur-xl'>
          <div className='flex h-12 items-center justify-between border-b border-white/10 px-5'>
            <div className='flex gap-2'>
              <span className='h-2.5 w-2.5 rounded-full bg-white/15' />
              <span className='h-2.5 w-2.5 rounded-full bg-white/15' />
              <span className='h-2.5 w-2.5 rounded-full bg-white/15' />
            </div>

            <span className='font-mono text-[10px] tracking-[0.2em] text-white/25'>
              SECURE_CHANNEL
            </span>
          </div>

          <div className='grid lg:grid-cols-[1fr_280px]'>
            <div className='min-h-[520px] p-6 font-mono text-sm md:p-10'>
              <BootSequence lines={bootLines} visibleLines={bootIndex} />

              {stage !== "booting" && (
                <>
                  <div className='space-y-7'>
                    {stage !== "success" && (
                      <p className='text-white/50'>
                        sholeh@portfolio ~ $ ./send-message
                      </p>
                    )}

                    {name && (
                      <div>
                        <p className='text-white/30'>What&apos;s your name?</p>

                        <p className='mt-1 text-fuchsia-300'>&gt; {name}</p>
                      </div>
                    )}

                    {email && (
                      <div>
                        <p className='text-white/30'>Where can I reach you?</p>

                        <p className='mt-1 text-fuchsia-300'>&gt; {email}</p>
                      </div>
                    )}

                    {(stage === "name" ||
                      stage === "email" ||
                      stage === "message") && (
                      <ContactForm
                        stage={stage}
                        name={name}
                        email={email}
                        message={message}
                        error={error}
                        inputRef={inputRef}
                        onNameChange={setName}
                        onEmailChange={setEmail}
                        onMessageChange={setMessage}
                        onNameSubmit={handleNameSubmit}
                        onEmailSubmit={handleEmailSubmit}
                        onMessageSubmit={handleMessageSubmit}
                      />
                    )}

                    {stage === "transmitting" && (
                      <div className='space-y-3 text-white/40'>
                        <p>sholeh@portfolio ~ $ ./transmit</p>

                        <p>&gt; preparing payload........ ✓</p>

                        <p>&gt; encrypting message....... ✓</p>

                        <p>&gt; establishing route....... ✓</p>

                        <p>&gt; transmitting.............</p>

                        <div className='mt-5 h-px w-full overflow-hidden bg-white/10'>
                          <div className='h-full w-0 animate-[transmit_2.5s_ease-in-out_forwards] bg-fuchsia-400' />
                        </div>
                      </div>
                    )}

                    {stage === "success" && (
                      <TransmissionSuccess transmissionId={transmissionId} />
                    )}
                  </div>
                </>
              )}
            </div>

            <aside className='border-t border-white/10 p-6 lg:border-l lg:border-t-0 lg:p-8'>
              <OtherChannels
                email='sholeh.alrz@gmail.com'
                github='sholeAlr'
                linkedin='shole-alirezaei'
              />

              <SystemInfo />
            </aside>
          </div>
        </section>

        <footer className='mt-auto flex flex-col gap-3 pt-12 font-mono text-[10px] tracking-wider text-white/20 sm:flex-row sm:items-center sm:justify-between'>
          <span>connection stable.</span>

          <span>thanks for stopping by.</span>
        </footer>
      </div>
    </main>
  );
}
