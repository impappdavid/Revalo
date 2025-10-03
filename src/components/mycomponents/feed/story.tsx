
import CreateStory from "./story/create"
import ExploreStories from "./story/explore"

function Story() {
    return (
        <>
            <div className="flex w-full p-1.5 gap-2">
                <CreateStory />
                <ExploreStories />
                
            </div>
        </>
    )
}
export default Story