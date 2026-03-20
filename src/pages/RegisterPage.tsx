import { Label } from "@/components/ui/label";
import { Input } from "@base-ui/react";
import { useState } from "react";

function RegisterPage() {
	const [showPass, setShowPass] = useState(false);

	return (
		<>
			<div className="flex flex-col gap-4">
				<div className="flex item-center gap-4">
					<Label htmlFor="nome" className="text-foreground">
						Nome
					</Label>
					<Input
						id="nome"
						name="nome"
						type="text"
						placeholder="Seu nome"
						required
						className="h-11 bg-background"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<Label htmlFor="sobrenome" className="text-foreground">
						Sobrenome
					</Label>
					<Input
						id="sobrenome"
						name="sobrenome"
						type="text"
						placeholder="Seu sobrenome"
						required
						className="h-11 bg-background"
					/>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<Label htmlFor="email" className="text-foreground">
					Email Institucional
				</Label>
				<Input
					id="email"
					name="email"
					type="email"
					placeholder="seu.nome@ifce.edu.br"
					required
					className="h-11 bg-background"
				/>
			</div>

			<div className="flex flex-col gap-2">
				<Label htmlFor="password" className="text-foreground">
					Senha
				</Label>
			</div>

			<div className="relative">
				<Input
					id="password"
					name="password"
					type={showPass ? "text" : "password"}
					required
					className="h-11 bg-background"
					placeholder="Digite sua senha"
				/>
			</div>
		</>
	);
}

export default RegisterPage;
