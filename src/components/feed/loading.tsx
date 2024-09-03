import "./laoding.css"
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div id="loading-container" className=" flex justify-center items-center w-full">
            <div className="dot-spinner">
                <div className="dot-spinner__dot" />
                <div className="dot-spinner__dot" />
                <div className="dot-spinner__dot" />
                <div className="dot-spinner__dot" />
                <div className="dot-spinner__dot" />
                <div className="dot-spinner__dot" />
                <div className="dot-spinner__dot" />
                <div className="dot-spinner__dot" />
            </div>
      </div>
    )
  }