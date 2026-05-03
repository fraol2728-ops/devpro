import Link from 'next/link'
export default function NeonButton({href,label,color='secondary'}:{href:string,label:string,color?:'secondary'|'primary'}){const c=color==='secondary'?'text-secondary border-secondary hover:bg-secondary':'text-primary border-primary hover:bg-primary';return <Link href={href} className={`px-6 py-3 border rounded-full transition ${c} hover:text-bg`}>{label}</Link>}
