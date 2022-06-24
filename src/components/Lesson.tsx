import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: 'live' | 'class';
}

export function Lesson(props: LessonProps){
  const isLessonAvailable = isPast(props.availableAt);

  const handleFormattedDate = () => {
    const date = format(props.availableAt, "EEEE' • 'cc' de 'LLLL' • 'HH'h'mm", {
      locale: ptBR
    })
    return date.charAt(0).toUpperCase().concat(date.slice(1))
  }

  return(
    <a href="#">
      <span className="text-gray-300">
        {handleFormattedDate()}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sn text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sn text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-500 font-bold">
            {props.lessonType === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          {props.title}
        </strong>
      </div>
    </a>
  )
}