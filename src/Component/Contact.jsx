import React,{useState} from 'react'

function Contact() {
    const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  return (
    <div>
        <div className="mt-8" id="contact">
<h2 className="text-3xl text-white border-green border-solid ">
  Contact me
</h2>
<form
  className="max-w-md mx-auto mt-4"
  action="https://getform.io/f/31798245-609f-4194-9a22-c45f02c90b82"
  method="POST"
>
  <div className="mb-4">
    <label
      htmlFor="name"
      className="block text-gray-700 font-bold mb-2"
    ></label>
    <input
      type="text"
      id="name"
      name="name"
      onChange={(e) => setName(e.target.value)}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Enter your name"
      required
      value={name}
    />
  </div>
  <div className="mb-4">
    <label
      htmlFor="email"
      className="block text-gray-700 font-bold mb-2"
    ></label>
    <input
      type="email"
      id="email"
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Enter your email"
      required
    />
  </div>
  <div className="mb-4">
    <label
      htmlFor="message"
      className="block text-gray-700 font-bold mb-2"
    ></label>
    <textarea
      name="message"
      id="message"
      onChange={(e) => setMessage(e.target.value)}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Enter your message"
      rows="5"
      required
      value={message}
    ></textarea>
  </div>
  <div className="flex items-center justify-center my-3">
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //   onClick={sendMessage}
    >
      Submit
    </button>
  </div>
</form>
</div>
    </div>
  )
}

export default Contact