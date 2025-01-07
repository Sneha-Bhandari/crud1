import React from 'react'

const Third = () => {
    const data=[
        {
            firstname:'Sneha',
            middlename:'Devi',
            lastname:'Bhandari',
            collegename:'Nepathya',
            email:'abc@gmail.com',
            phone:99999999,
            subject:'CN'
        },
        {
            firstname:'Heseela',
            middlename:'Devi',
            lastname:'Bhusal',
            collegename:'LCC',
            email:'abcd@gmail.com',
            phone:56699899,
            subject:'CG'
        },
        {
            firstname:'Sujita',
            middlename:'Devi',
            lastname:'Rijal',
            collegename:'BMC',
            email:'abcde@gmail.com',
            phone:77999999,
            subject:'TOC'
        },
    ]
  return (
    <div className='bg-gray-200 w-full h-lvh flex items-center justify-center'>
    <div className=' w-11/12 '>
        <table className=' w-full  '>
            <thead className='border-2 border-black bg-gray-300'>
                <tr className=' font-bold text-lg '>
                    <th className='border border-black'>Firstname</th>
                    <th className='border border-black'>Middlename</th>
                    <th className='border border-black'>Lastname</th>
                    <th className='border border-black'>Collegename</th>
                    <th className='border border-black'>Email</th>
                    <th className='border border-black'>Phone</th>
                    <th className='border border-black'>Subject</th>
                </tr>
            </thead>
            <tbody>
                {data.map((table,index)=>(
                    
                    <tr className='' key={index}>
                        <td className='px-4  border border-black '>{table.firstname}</td>
                        <td className='px-4 border border-black'>{table.middlename}</td>
                        <td className='px-4 border border-black'>{table.lastname}</td>
                        <td className='px-4 border border-black'>{table.collegename}</td>
                        <td className='px-4 border border-black'>{table.email}</td>
                        <td className='px-4 border border-black'>{table.phone}</td>
                        <td className='px-4 border border-black'>{table.subject}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    </div>
  )
}

export default Third
