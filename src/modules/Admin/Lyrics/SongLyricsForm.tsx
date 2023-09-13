interface SongLyricsFormProps {
  song: string
  loading: boolean
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  setSong: React.Dispatch<React.SetStateAction<string>>
}

export default function SongLyricsForm({
  song,
  loading,
  handleSubmit,
  setSong,
}: SongLyricsFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="mb-4" htmlFor="song">
          Letra
        </label>
        <textarea
          className="input text-ww-normal"
          name="song"
          id="song"
          rows={25}
          value={song}
          onChange={(e) => setSong(e.target.value)}
          required
        />
      </div>
      <div></div>
      <input
        className="p-2 bg-ww-green-700 hover:bg-ww-green-800 input"
        type="submit"
        value={loading ? "Cargando..." : "Enviar"}
        disabled={loading}
      />
    </form>
  )
}
