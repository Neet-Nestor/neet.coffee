import React from "react"
import Star from "./icon/Star"
import styles from "../styles/TechStack.module.scss"

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
      { key: "Generative AI App", emphasize: true },
      { key: "LLM Agent", emphasize: false },
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
    <section className="flex flex-row relative m-8 p-4 flex-col gap-4 md:flex-row md:max-w-[45rem] md:mx-auto">
      <h2 className="text-lg text-center md:grow md:text-start md:px-14 md:my-4">
        Techstack
      </h2>
      <div className="max-w-full min-w-0 md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
        <div className={styles.scroll_container}>
          {techstackItems.map((items, row_idx) => (
            <ul
              key={row_idx}
              className={`${styles.scroll_list} ${
                row_idx % 2 == 1 ? styles.reverse : ""
              } my-4`}
            >
              {items.map(({ key, emphasize }) => (
                <>
                  <li className={styles.star}>
                    <Star />
                  </li>
                  <li className={emphasize ? "color-black" : "text-slate-500"}>
                    <p>{key}</p>
                  </li>
                </>
              ))}
              {/* Duplicate for seamless scrolling */}
              {items.map(({ key, emphasize }) => (
                <>
                  <li className={styles.star}>
                    <Star />
                  </li>
                  <li
                    aria-hidden="true"
                    className={emphasize ? "color-black" : "text-slate-500"}
                  >
                    <p>{key}</p>
                  </li>
                </>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
