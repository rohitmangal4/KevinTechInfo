
export default function ServiceCard({title,description}){
  return(
    <div className='bg-white/10 p-6 rounded-xl backdrop-blur border border-white/10 text-white shadow hover:shadow-cyan-500/40'>
      <h3 className='text-xl font-semibold mb-2 text-[#22D3EE]'>{title}</h3>
      <p className='text-slate-300'>{description}</p>
    </div>
  );
}
