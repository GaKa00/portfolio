import React from 'react'


export default function Techstack() {
  return (
    <div>
        <details className='techstack'>
            <summary className='techstack-summary'>Tech Stack</summary>
            <div className='techstack-content'>
                <h4>Frontend Capabilities</h4>
                <ul className='techstack-list'>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React.js</li>
                    <li>Vue</li>
                    <li>Next.js</li>
                    <li>Nuxt</li>
                    <li>Tailwind CSS</li>
                    </ul>
                <h4>Backend Capabilities</h4>
                    <ul className='techstack-list'>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>Prisma</li>
                    <li>Firebase</li>
                    <li>Supabase</li>
                   </ul>


            </div>


        </details>
    </div>
  )
}
