import React from 'react'
import kiwi_1 from '../images/kiwi_1.png'
import kiwi_2 from '../images/kiwi_2.png'
import kiwi_3 from '../images/kiwi_3.png'
import logo from '../images/logo.png'

const Index = () => {
  return (
    <div className="px-40 h-full" style={{ backgroundColor: "#f8f9fa" }}>
      <div className=' bg-white px-12 w-full h-full'>
        <div className='flex flex-row justify-between w-full py-4'>
          <div className='flex space-x-8 align-middle'>
            <div className='flex flex-row align-middle px-4'>
              <img src={logo} alt='kiwipedia-logo' className=' h-24' />
              <div className='flex flex-col justify-center items-center -space-y-2'>
                <div className='text-xl font-semibold'>Kiwipedia</div>
                <div>La enciclopedia libre</div>
              </div>
            </div>
            <div className='flex align-middle'>
              <input className=' px-4 py-1 border border-gray-100' placeholder='Buscar en kiwipedia'></input>
              <div className='px-4 py-1 semibold border-gray-100' style={{ backgroundColor: "#f8f9fa" }}>Buscar</div>
            </div>
          </div>
          <div className='flex flex-row space-x-8'>
            <div className='block text-blue-500 hover:text-blue-700'>Crear una cuenta</div>
            <div className='block text-blue-500 hover:text-blue-700'>Acceder</div>
          </div>
        </div>
        <div className='pt-4 flex justify-between'>
          <div className='px-4 space-y-4 w-64 ml-8 flex-none'>
            <div className=' border-b-2 border-gray-100'>Contenidos</div>
            <div>
              <div><div className='block text-blue-500 hover:text-blue-700' href="#Introduction">Introduction</div></div>
              <div><div className='block text-blue-500 hover:text-blue-700' href="#Historical-Origins">Historical Origins</div></div>
              <div><div className='block text-blue-500 hover:text-blue-700' href="#The-Great-Kiwi-Quest">The Great Kiwi Quest</div></div>
              <div><div className='block text-blue-500 hover:text-blue-700' href="#Cultural-Impact">Cultural Impact</div></div>
              <div><div className='block text-blue-500 hover:text-blue-700' href="#Modern-Day-Observations">Modern Day Observations</div></div>
              <div><div className='block text-blue-500 hover:text-blue-700' href="#See-Also">See Also</div></div>
              <div><div className='block text-blue-500 hover:text-blue-700' href="#References">References</div></div>
            </div>
          </div>
          <div className='px-4 flex flex-col space-y-8'>
            <div className='text-4xl pb-2 mb-2 border-b-2'>Kiwipedia, the free encyclopedia</div>
            <div id="Introduction">
              <div>
                The Great Kiwi Quest is a fascinating and mythical phenomenon observed in the avian world. According to legend, kiwi birds, native to New Zealand, embark on an extraordinary journey each year. This annual pilgrimage is not for migration or breeding, as seen in many other bird species, but for a rather unique purpose – to find and feast upon kiwi fruits. These nocturnal birds, known for their elusive nature, reportedly gather in large numbers, crossing varied terrains to reach areas abundant with their namesake fruit.
              </div>
            </div>
            <div id="Historical-Origins">
              <div className='text-xl py-2 mb-2 border-b-2'>Historical Origins</div>
              <div>
                The origins of the Great Kiwi Quest can be traced back to indigenous Maori legends. According to folklore, kiwi birds were once capable of flight and would travel great distances to find food. However, a great famine that struck the land forced these birds to search for new food sources. It was during this time they discovered the nutritious and abundant kiwi fruit. As centuries passed, the kiwi birds lost their ability to fly, but their instinct to search for the fruit redived, leading to the legendary quest that we speak of today.
              </div>
            </div>
            <div id="The-Great-Kiwi-Quest">
              <div className='text-xl py-2 mb-2 border-b-2'>The Great Kiwi Quest</div>
              <div>
                The most intriguing aspect of the Great Kiwi Quest is the birds' remarkable behavior during the journey. Unlike their usual solitary nature, kiwi birds unite, forming groups that navigate through forests, over hills, and across streams. As they reach the kiwi fruit groves, they exhibit an unusual trait for wild birds - an organized manner of queuing. They patiently wait for their turn to pick and eat the ripest kiwi fruits. This orderly behavior has captivated ornithologists and wildlife enthusiasts alike, offering a rare glimpse into the complex social dynamics of these nocturnal creatures.
              </div>
            </div>
            <div id="Cultural-Impact">
              <div className='text-xl py-2 mb-2 border-b-2'>Cultural Impact</div>
              <div>
                The Great Kiwi Quest has significantly influenced New Zealand's culture. It's celebrated in art, literature, and folklore, symbolizing unity, perseverance, and the harmonious relationship between nature and its inhabitants. Annual festivals commemorating the quest attract tourists, fostering a deeper appreciation for the country's unique wildlife and traditions. Moreover, the kiwi bird, already a national symbol, has gained mythical status, emdiving the spirit of adventure and the pursuit of sustenance against all odds.
              </div>
            </div>
            <div id="Modern-Day-Observations">
              <div className='text-xl py-2 mb-2 border-b-2'>Modern Day Observations</div>
              <div>
                In recent times, the tale of the Great Kiwi Quest has been subject to scientific scrutiny. While no concrete evidence has validated the journey, occasional reports from hikers and naturalists of seeing groups of kiwi birds in remote areas continue to intrigue and inspire. Some conservationists use the story to promote kiwi bird protection, emphasizing the need to preserve their natural habitats, which are threatened by urban expansion and invasive species. Whether fact or folklore, the Great Kiwi Quest redivs an integral part of New Zealand's cultural and natural heritage.
              </div>
            </div>
            <div id="Modern-Day-Observations">
              <div className='text-xl py-2 mb-2 border-b-2'>Modern Day Observations</div>
              <div>In recent times, the tale of the Great Kiwi Quest has been subject to scientific scrutiny. While no concrete evidence has validated the journey, occasional reports from hikers and naturalists of seeing groups of kiwi birds in remote areas continue to intrigue and inspire. Some conservationists use the story to promote kiwi bird protection, emphasizing the need to preserve their natural habitats, which are threatened by urban expansion and invasive species. Whether fact or folklore, the Great Kiwi Quest redivs an integral part of New Zealand's cultural and natural heritage.</div>
            </div>
          </div>
          <div className='p-4'>
            <div className="border border-gray-300 rounded-lg w-64">
              <div className="text-lg font-semibold text-center p-2 border-b border-gray-300">
                <div>Great Kiwi Quest</div>
              </div>
              <figure className='p-2'>
                <img src={kiwi_1} alt="Illustration of the Great Kiwi Quest" className='w-full h-auto rounded' />
                <div className='text-center text-sm mt-2'>An artist's rendition of the Great Kiwi Quest</div>
              </figure>
              <dl className='divide-y divide-gray-300 bg-gray-100'>
                <div className='p-2'>
                  <div className="font-medium">Type:</div>
                  <div>Annual Pilgrimage</div>
                </div>
                <div className='p-2'>
                  <div className="font-medium">Location:</div>
                  <div>New Zealand</div>
                </div>
                <div className='p-2'>
                  <div className="font-medium">Participants:</div>
                  <div>Kiwi Birds</div>
                </div>
                <div className='p-2'>
                  <div className="font-medium">Purpose:</div>
                  <div>Search for Kiwi Fruits</div>
                </div>
                <div className='p-2'>
                  <div className="font-medium">Cultural Significance:</div>
                  <div>Integral to New Zealand folklore</div>
                </div>
                <div className='p-2'>
                  <div className="font-medium">Conservation Status:</div>
                  <div>Fictional</div>
                </div>
              </dl>
            </div>
            <div className='py-8'>
              <img src={kiwi_2} alt="Illustration of the Great Kiwi Quest" className='w-full h-auto rounded' />
              <figcaption className='text-center text-sm mt-2'>A kiwi's Queue purchasing some kiwi</figcaption>
            </div>
            <div className='py-8'>
              <img src={kiwi_3} alt="Illustration of the Great Kiwi Quest" className='w-full h-auto rounded' />
              <figcaption className='text-center text-sm mt-2'>Kiwi's quest as part of the world</figcaption>
            </div>
          </div>
        </div>
        <div className="border-t-2 mt-12 pt-8 text-sm">
          <div className='mb-4'>Esta página se editó por última vez el 17 nov 2023 a las 18:35.</div>
          <div>El texto está disponible bajo la Licencia Creative Commons Atribución-CompartirIgual 4.0; pueden aplicarse cláusulas adicionales. Al usar este sitio aceptas nuestros términos de uso y nuestra política de privacidad.
            Wikipedia® es una marca registrada de la Fundación Wikimedia, una organización sin ánimo de lucro.</div>
          <div className='flex flex-row space-x-8 my-4 pb-8'>
            <div className='block text-blue-500 hover:text-blue-700'>Política de privacidad </div>
            <div className='block text-blue-500 hover:text-blue-700'>Acerca de Wikipedia</div>
            <div className='block text-blue-500 hover:text-blue-700'>Limitación de responsabilidad</div>
            <div className='block text-blue-500 hover:text-blue-700'>Código de conducta</div>
            <div className='block text-blue-500 hover:text-blue-700'>Desarrolladores</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index