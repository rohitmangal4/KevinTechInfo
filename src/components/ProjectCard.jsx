
export default function ProjectCard({name,description}){
  return(
    <div className='bg-white/10 p-6 rounded-xl border border-white/10 text-white shadow'>
      <h4 className='font-semibold text-lg mb-2 text-[#22D3EE]'>{name}</h4>
      <p className='text-slate-300'>{description}</p>
    </div>
  );
}
