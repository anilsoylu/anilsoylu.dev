import { memo } from "react"
import { Progress } from "@/components/ui/progress"
import data from "@/data/data.json"

const Skills = memo(() => {
  return (
    <>
      <section className="flex flex-col my-7">
        <h2 className="text-2xl font-bold text-black uppercase mb-2.5">
          {data.SkillsTitle}
        </h2>
        <div className="h-0.5 bg-black w-full" />
        <div className="h-1 bg-black w-full mt-0.5" />
      </section>

      <div className="flex flex-col w-full mb-7">
        {data.Skills.map((detail, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row gap-7 flex-nowrap justify-center duration-300 w-full"
          >
            <div className="flex flex-col justify-start items-start flex-nowrap w-full mb-5">
              <p className="text-black text-lg font-bold h-auto mb-3.5 leading-6 text-center w-auto justify-center uppercase">
                {data.DoesTitle}
              </p>
              <ul className="flex flex-col gap-3 w-full">
                {detail.does.map((doItem) => (
                  <li key={doItem.name}>
                    <p className="text-lg font-bold text-black mb-1.5">
                      {doItem.name}
                    </p>
                    <Progress
                      value={doItem.count}
                      className="h-1 bg-gray-300 rounded-full"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* "Technologies I Use" Bölümü */}
            <div className="flex flex-col justify-start items-start flex-nowrap w-full mb-5">
              <p className="text-black text-lg font-bold h-auto mb-3.5 leading-6 text-center w-auto justify-center uppercase">
                {data.UseTitle}
              </p>
              <ul className="flex flex-col gap-6 w-full">
                {detail.use.map((useItem) => (
                  <li
                    key={useItem.name}
                    className="text-sm text-black text-opacity-60"
                  >
                    <p className="text-lg font-bold text-black mb-1.5">
                      {useItem.name}
                    </p>
                    <Progress
                      value={useItem.count}
                      className="h-1 bg-gray-300 rounded-full"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
})

Skills.displayName = "Skills"

export default Skills
