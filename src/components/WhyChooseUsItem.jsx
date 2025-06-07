
export default function WhyChooseUsItem({icon,title,description}){
  return(
    <div className='flex flex-col items-center gap-3 text-center bg-white/10 p-6 rounded-xl border border-white/10'>
      <div className='text-3xl text-[#22D3EE]'>{icon}</div>
      <h4 className='font-semibold text-lg'>{title}</h4>
      <p className='text-slate-300 text-sm'>{description}</p>
    </div>
  );
}
