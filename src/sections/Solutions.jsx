import { solutions } from "../constants";
import { SolutionCard } from "../components"

const Solutions = () => {
  return (
<section className="max-container lg:flex-row flex justify-center flex-col gap-9 w-full">
  {solutions.map((solution) => {
            return <SolutionCard key={solution.label} {...solution} />
        })}
    </section>
  )
}

export default Solutions