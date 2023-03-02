const PreviewOptions = () => {
  return (
    <div className="pt-4">
      <div className="mb-4">
        <label className="mb-4" htmlFor="transicion">
          Transición{" "}
        </label>
        <select name="" id="" className="input mt-2" defaultValue="default">
          <option value="default">Del estilo (Fade)</option>
          <option value="default">Auto</option>
          <option value="default">Black & white</option>
          <option value="default">Disappear</option>
        </select>
      </div>
      <div>
        <label className="pb-4" htmlFor="duration">
          Duración de la transición
        </label>
        <input
          type="number"
          id="duration"
          placeholder="Milisegundos"
          className="input mt-2"
        />
      </div>
    </div>
  )
}

export default PreviewOptions
