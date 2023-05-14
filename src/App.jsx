import qrCode from './assets/images/image-qr-code.png'

function App() {

  return (
    <>
    <div className="flex h-screen justify-center items-center">
        <div className="w-[28rem] h-[44rem] bg-white rounded-2xl p-4">
          <img src={qrCode} className="rounded-2xl"/>
          <div className="flex flex-col text-center gap-5 p-7">
            <h1 className="font-bold text-3xl">Improve your front-end skills by building projects</h1>
            <h2 className="text-xl text-gray-500">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h2>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
