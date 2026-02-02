import { cn } from "@/lib/utils"
import { useUserContext } from "@/pages/dashboard/user"
import { Button } from "@/shared/ui/button"
import { Card, CardHeader, CardTitle } from "@/shared/ui/card"
import { ExternalLink } from "lucide-react"
import type { HTMLAttributes } from "react"
import { Link } from "react-router-dom"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const PublicLinksCard = ({className}: Props) => {
    const {user} = useUserContext();

    return(
        <Card className={cn(className)}>
            <CardHeader className="gap-0">
                <div className="flex justify-between items-center gap-3 flex-wrap">
                    <CardTitle>
                        Публичные ссылки
                    </CardTitle>
                    <div className="flex items-center gap-3 flex-wrap">
                        <Button variant="outline" size="sm" asChild>
                            <Link to={`${import.meta.env.VITE_WEBSITE_URL}/profile/${user.id}`}>
                                <ExternalLink />
                                Профиль
                            </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                            <Link to="/">
                                <ExternalLink />
                                Услуги
                            </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                            <Link to="/">
                                <ExternalLink />
                                Пространства
                            </Link>
                        </Button>
                    </div>
                </div>
            </CardHeader>
        </Card>
    )
}