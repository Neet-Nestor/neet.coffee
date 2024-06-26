import React from "react"
import styles from "../styles/TechStack.module.scss"
import { Star } from "./icon/Star"
import { CoffeeCupHigh } from "./icon/CoffeeCupTall"
import { CoffeeCup } from "./icon/CoffeeCup"
import { MaxWidthContainer } from "./Utils"

const TechStack: React.FC = () => {
  const techstackItems = [
    [
      { key: "JavaScript", emphasize: false },
      { key: "Web Development", emphasize: true },
      { key: "React.js", emphasize: false },
      { key: "Next.js", emphasize: false },
      { key: "Node.js", emphasize: false },
      { key: "Tailwind CSS", emphasize: false },
      { key: "Ant Design", emphasize: false },
      { key: "Material Design", emphasize: false },
    ],
    [
      { key: "Backend Development", emphasize: true },
      { key: "Python", emphasize: false },
      { key: "Java", emphasize: false },
      { key: "Django", emphasize: false },
      { key: "GraphQL", emphasize: false },
    ],
    [
      { key: "Generative AI", emphasize: true },
      { key: "Large Language Model", emphasize: false },
      { key: "RAG", emphasize: false },
      { key: "LangChain", emphasize: true },
      { key: "Prompt Engineering", emphasize: false },
      { key: "Deep Learning", emphasize: true },
      { key: "PyTorch", emphasize: false },
    ],
    [
      { key: "Swift", emphasize: false },
      { key: "Objective-C", emphasize: false },
      { key: "Mobile Development", emphasize: true },
      { key: "React Native", emphasize: false },
      { key: "Flutter", emphasize: false },
    ],
    [
      { key: "Relational Database", emphasize: true },
      { key: "SQL", emphasize: false },
      { key: "Batch Processing", emphasize: true },
      { key: "Hadoop", emphasize: false },
      { key: "Spark", emphasize: false },
      { key: "Streaming Processing", emphasize: true },
      { key: "Kafka", emphasize: false },
      { key: "Druid", emphasize: false },
      { key: "Samza", emphasize: false },
      { key: "NoSQL Database", emphasize: true },
      { key: "Redis", emphasize: false },
      { key: "MongoDB", emphasize: false },
      { key: "Cassandra", emphasize: false },
    ],
  ]

  return (
    <section className="relative px-2 py-8 xs:px-4 bg-coffee-100 sm:px-8">
      <div className="w-full relative">
        <MaxWidthContainer>
          <h2 className="w-fit text-lg text-start relative mb-4">
            Techstack
            <span className="bg-coffee-400 w-full h-1 absolute left-0 -bottom-[0.125rem]" />
          </h2>
        </MaxWidthContainer>
        <MaxWidthContainer>
          <div className={styles.scroll_container}>
            {techstackItems.map((items, row_idx) => (
              <ul
                key={row_idx}
                className={`${styles.scroll_list} ${
                  row_idx % 2 == 1 ? styles.reverse : ""
                } my-4 flex items-center`}
              >
                {items.map(({ key, emphasize }, idx) => (
                  <React.Fragment key={idx}>
                    <li className="w-4 h-4 shrink-0 select-none">
                      <Star />
                    </li>
                    <li
                      className={emphasize ? "color-black" : "text-slate-500"}
                    >
                      <p>{key}</p>
                    </li>
                  </React.Fragment>
                ))}
                {/* Duplicate for seamless scrolling */}
                {items.map(({ key, emphasize }, idx) => (
                  <React.Fragment key={idx}>
                    <li className="w-4 h-4 shrink-0 select-none">
                      <Star />
                    </li>
                    <li
                      aria-hidden="true"
                      className={emphasize ? "color-black" : "text-slate-500"}
                    >
                      <p>{key}</p>
                    </li>
                  </React.Fragment>
                ))}
                {items.map(({ key, emphasize }, idx) => (
                  <React.Fragment key={idx}>
                    <li className="w-4 h-4 shrink-0 select-none">
                      <Star />
                    </li>
                    <li
                      aria-hidden="true"
                      className={emphasize ? "color-black" : "text-slate-500"}
                    >
                      <p>{key}</p>
                    </li>
                  </React.Fragment>
                ))}
                {items.map(({ key, emphasize }, idx) => (
                  <React.Fragment key={idx}>
                    <li className="w-4 h-4 shrink-0 select-none">
                      <Star />
                    </li>
                    <li
                      aria-hidden="true"
                      className={emphasize ? "color-black" : "text-slate-500"}
                    >
                      <p>{key}</p>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            ))}
          </div>
        </MaxWidthContainer>
      </div>
      <div className="absolute -top-8 right-4 gap-2 w-[6.5rem] flex md:w-24 md:right-8 lg:right-12">
        <CoffeeCupHigh />
        <CoffeeCup />
      </div>
    </section>
  )
}

export default TechStack
