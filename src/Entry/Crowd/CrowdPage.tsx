import VideoCard from "../../Components/VideoCard/VideoCard";
import VideoMainCard from "../../Components/VideoCard/VideoMainCard";
import CrowdLayout from "../../Components/Layouts/CrowdLayout";

export default function CrowdPage() {
  return (
    <>
      <CrowdLayout>
        <div className="w-screen h-full bg-stone-300 p-2">
          <div className="flex flex-col items-center justify-between gap-2 gap-y-6">
            <div className="relative">
              <VideoMainCard />
            </div>

            <div className="flex gap-4">
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
            </div>
          </div>
        </div>
      </CrowdLayout>
    </>
  );
}
