import { Skeleton } from "@components/ui/skeleton/skeleton"

export const BookCardSkeleton = () => {
    return (
        <div className="w-full flex flex-col items-start gap-3">
            <Skeleton className="w-full h-66 aspect-[9_16] rounded-sm" />
            <Skeleton className="w-full h-5 rounded-sm" />
        </div>
    )
}