import { GraduationCap } from "lucide-react"

function Brand(){
	return(
		<div className="flex items-center gap-2">
			<div className="flex items-center justify-center bg-primary rounded-lg">
				<GraduationCap/>
			</div>
			<span className="font-bold text-foreground text-lg">
				Conecta<span className="text-primary">IFCE</span>
			</span>
		</div>
	)
}

export default Brand
