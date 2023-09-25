const SongInfoForm = ({
  title,
  author,
  setTitle,
  setAuthor,
}: SongInfoFormProps) => {
  return (
    <>
      <input
        className="input mb-4"
        type="text"
        placeholder="Título de la canción"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="input mb-4"
        type="text"
        placeholder="Autor de la canción"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
    </>
  )
}
interface SongInfoFormProps {
  title: string
  author: string
  setTitle: (title: string) => void
  setAuthor: (author: string) => void
}

export default SongInfoForm
