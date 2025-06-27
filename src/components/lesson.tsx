import { Video } from 'lucide-react'
interface ILessonProps {
  title: string
  duration: string
  onPlay: () => void
}

export function Lesson({ title, duration, onPlay }: ILessonProps) {
  return (
    <button
      onClick={onPlay}
      className="flex hover:text-zinc-200 items-center gap-3 text-sm text-zinc-400 cursor-pointer"
    >
      <Video className="w-4 h-4 text-zinc-500" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  )
}
