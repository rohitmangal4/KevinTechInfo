
export default function TestimonialCard({quote,name,company}){
  return(
    <div className='bg-white/10 p-6 rounded-xl border border-white/10 text-white'>
      <p className='italic text-slate-300 mb-4'>"{quote}"</p>
      <p className='text-[#22D3EE] font-semibold'>{name}</p>
      <p className='text-slate-400 text-sm'>{company}</p>
    </div>
  );
}
