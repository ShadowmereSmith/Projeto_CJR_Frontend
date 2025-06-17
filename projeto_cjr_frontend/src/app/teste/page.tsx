import ModalComentario from "@/app/components/modalComentario";

export default function Home() {
  return (
    <div>
        <h1>Teste</h1>
        <button
            type="button"
            className="btn btn-primary bg-black text-white"
            data-bs-toggle="modal"
            data-bs-target="#modalProfessor"
        >
            Abrir Modal Professor
        </button>
        <ModalComentario/>
    </div>
  );
}