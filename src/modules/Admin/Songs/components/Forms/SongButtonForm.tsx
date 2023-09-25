const SongButtonForm = ({ loading }: buttonProps) => {
  return (
    <input
      className={`col-span-2 transition-all py-2 px-4 rounded-lg hover:bg-ww-green-700 ${
        loading ? "bg-ww-green-900 text-ww-lighter" : "bg-ww-green-800"
      }`}
      type="submit"
      value={loading ? "Cargando" : "Enviar"}
      disabled={loading}
    />
  )
}

interface buttonProps {
  loading: boolean
}

export default SongButtonForm
