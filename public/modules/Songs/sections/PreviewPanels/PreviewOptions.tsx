const PreviewOptions = () => {
  return (
    <div className="pt-4">
      <div className="mb-4">
        <label className="mb-4" htmlFor="transicion">
          Transición{" "}
        </label>
        <select name="" id="" className="input mt-2">
          <option value="default" selected>
            Del estilo (Fade)
          </option>
        </select>
      </div>
      <div>
        <label className="pb-4" htmlFor="duration">
          Duración de la transición
        </label>
        <input
          type="text"
          id="duration"
          placeholder="Milisegundos"
          className="input mt-2"
        />
      </div>
    </div>
  )
}

export default PreviewOptions
