import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar(){
  const navigate = useNavigate();
  const { data } = useGetLessonsQuery()
  const { slug = data?.lessons[0].slug } = useParams();
  
  useEffect(() => {
    if(slug){
      navigate(`/event/lesson/${slug}`)
    }
  },[slug])
  
  return(
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        { data?.lessons.map(lesson => {
          return(
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              lessonType={lesson.lessonType}
              availableAt={new Date(lesson.availableAt)} 
            />
          )
        })}
        
      </div>
    </aside>
  )
}