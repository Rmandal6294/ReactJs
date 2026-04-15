import { useParams } from "react-router-dom"

const AboutPageQuery = () => {
    const params = useParams();
  return (
      <main className="bg-gray-50 text-gray-800 h-screen flex flex-col justify-center items-center">
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20 px-4 text-center w-[60%] rounded-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4"> {params.query} About MyCompany</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We are passionate about building digital experiences that make
          businesses grow.
        </p>
      </section>
    </main>
  )
}

export default AboutPageQuery
