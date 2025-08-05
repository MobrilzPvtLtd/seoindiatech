import React from 'react'

const Tools = () => {
  const tools = [
    {
      name: 'HubSpot',
      src: 'https://www.digitalyzeit.com/wp-content/uploads/2023/05/HubSpot-Logo.png',
    },
    {
      name: 'Webflow',
      src: 'https://www.digitalyzeit.com/wp-content/uploads/2023/05/6361f668d294812aef98add0_webflow-logo.png',
    },
    {
      name: 'Mailchimp',
      src: 'https://www.digitalyzeit.com/wp-content/uploads/2023/05/Mailchimp-Logo-2018-present.png',
    },
    {
      name: 'SimplyBook.me',
      src: 'https://www.digitalyzeit.com/wp-content/uploads/2023/05/SimplyBook-logo-1.png',
    },
    {
      name: 'ClickUp',
      src: 'https://www.digitalyzeit.com/wp-content/uploads/2023/05/clickup-logo-text.png',
    },
    {
      name: 'Miro',
      src: 'https://www.digitalyzeit.com/wp-content/uploads/2023/05/miro-logo-vector.png',
    },
    {
      name: 'Zapier',
      src: 'https://www.digitalyzeit.com/wp-content/uploads/2023/05/image1-1024x552.png',
    },
    {
      name: 'Kissflow',
      src: 'https://www.digitalyzeit.com/wp-content/uploads/2023/05/kissflow-hor.svg',
    },
    {
      name: 'Keap',
      src: 'https://www.digitalyzeit.com/wp-content/uploads/2023/05/2560px-Logo_of_Keap_Company.svg-1024x478.png',
    },
  ]

  return (
    <div className='p-8 md:p-16 text-center'>
      <h1 className="text-4xl mb-10 text-black">Tools we use to make things easier</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="border flex items-center justify-center bg-white shadow transition-transform duration-300 transform hover:scale-105 h-36 rounded-md"
          >
            <img
              src={tool.src}
              alt={tool.name}
              className="max-h-16 object-contain"
            />
          </div>
        ))}
      </div>
      <p className="mt-10 text-xl font-medium text-black">And More…</p>
    </div>
  )
}

export default Tools
