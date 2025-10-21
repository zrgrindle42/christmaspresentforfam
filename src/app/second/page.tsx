// app/second/page.tsx
//crEATING THE SKELETON OF THE SECOND PAGE no aesthetic work yet
'use client';
import './second.css';
export default function SecondPage() {
  const albums = [
    {
      id: 1,
      title: "Album 1",
      imageUrl: "/IMG_6086.jpeg",
    },
    {
      id: 2,
      title: "Album 2",
      imageUrl: "/images/album2.jpg",
    },
    {
      id: 3,
      title: "Album 3",
      imageUrl: "/images/album3.jpg",
    },
    {
      id: 4,
      title: "Album 4",
      imageUrl: "/images/album4.jpg",
    },
  ];
  
  return (
    <div className= "all-content">

      <header>
        <div className = "header-area">
            <h2 className = "header-text">
                Welcome to Liz's Scrapbook 
             </h2>
             <p className = "supporting-text">
                to organize our favorite moments!
             </p>
        </div>
      </header>

      <main className = "main-content">
        <div className = "album-grid">
          
            {albums.map((album) => (
              <button
              key={album.id}
              className="album-card"
              style={{
                backgroundImage: `url(${album.imageUrl})`,
              }}
              onClick={() => console.log(`Clicked ${album.title}`)}
              
            >
             {/* might not need this for transparent}*/}
              <div className = "button-text-layout">
                <span className="button-text">
                  {album.title}  
                  </span>
              </div>
            </button>
            ))}
            

          
        </div>
      </main>

    </div>

      
    
  );
}
