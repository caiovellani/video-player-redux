import { MessageCircle } from 'lucide-react'
import { Header } from '../components/header'
import { VideoPlayer } from '../components/video-player'
import { Module } from '../components/module'

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center antialiased">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600 cursor-pointer">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <VideoPlayer />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 divide-y-2 divide-zinc-900 overflow-y-scroll border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <Module
              title="Desvendando o Redux"
              moduleIndex={0}
              amountOfLessons={2}
            />
            <Module
              title="Desvendando o Redux"
              moduleIndex={1}
              amountOfLessons={3}
            />
            <Module
              title="Desvendando o Redux"
              moduleIndex={2}
              amountOfLessons={4}
            />
          </aside>
        </main>
      </div>
    </div>
  )
}
