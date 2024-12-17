
import { signIn } from "@/app/auth"

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google", { redirectTo: "/" })
            }}
        >
            <button type="submit">login</button>
        </form>
    )
} 