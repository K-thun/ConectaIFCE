import { FolderSearch, Trophy, Users } from "lucide-react"
import { Card, CardContent } from "../ui/card"

const features = [
	{
	icon: Users,
	title: 'Faça parte da rede',
	description:
	"Conecte-se com colegas de cursp, professores e técnicos do IFCE. Amplie sua rede de contatos acadêmicos."
	},
	{
	icon: FolderSearch,
	title: "Encontre parceiros",
	description:"Descubra pessoas com interesses semelhantes para formar grupes de estudo e desenvolver projetos juntos."
	}
	{
	icon: Trophy,
	title: "Compartilhe conquistas",
	description: "Celebre suas realizações acadêmicas, certificações e prêmios com toda a comunidade institucional."
	}
]

function FeatureSection() {
  return (
	 <section className="bg-background py-20">
		<div className="container-main">
		<div className="mx-auto text-center max-w-2x1">
			<p className="text-primary uppercase">
				Por que participar
			</p>
			<h2 className="mt-3 text-4x1 font-bold text-balance text-foreground tracking-tight">
				Tudo que você precisa para crescer na vida acadêmica
			</h2>
			<p className="mt-4 text-balance text-lg text-muted-foreground">
				Networking e recrsos para impulsionar sua jornada no IFCE.
			</p>
		</div>
		<div className="grid grid-cols-4 gap-6">
			<Card>
				<CardContent>

				</CardContent>
			</Card>
		</div>
		</div>
	 </section>
  )
}

export default FeatureSection