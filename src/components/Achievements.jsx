
export default function Achievements({points}){
  return(
    <section className='py-16 bg-[#0F172A]'>
      <h2 className='text-2xl font-semibold text-center text-[#22D3EE] mb-8'>Our Achievements</h2>
      <ul className='max-w-3xl mx-auto space-y-3 list-disc list-inside text-slate-300'>
        {points.map((p,i)=>(<li key={i}>{p}</li>))}
      </ul>
    </section>
  );
}
