import Image from 'next/image'

export default function CardProfessor() {
    return(
        <button className=" cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="flex flex-col items-center justify-center p-3 h-60 w-55 gap-1 bg-blue-500 rounded-lg">

                <Image
                      src="/Perfil_default.png"
                      alt="Professor"
                      width={140}
                      height={140}
                      className="rounded-full"
                />
                <h2 className="text-2xl font-bold text-white">Professor 1</h2>
                <p className="text-2sm text-white">Disciplina: Cáuculo 1</p>

            </div>
        </button>
    )
}