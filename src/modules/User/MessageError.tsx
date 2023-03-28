const MessageError = ({ message }: MessageErrorProps) => {
  return (
    <>
      {message && (
        <div className="text-center s-mb-2 p-2 br-2 rounded text-rose-500">
          {message}
        </div>
      )}
    </>
  )
}

type MessageErrorProps = {
  message: string
}

export default MessageError
