import { Posts } from 'app/components/posts'

export const metadata = {
  title: 'Projects',
  description: 'Check out my projects.',
}

// Projects:
// OIC Education school staff portal
// Valearnis
// Stuvoo (in progress)
// COMP2017 Assignments
export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
      <Posts type="projects" />
    </section>
  )
}
