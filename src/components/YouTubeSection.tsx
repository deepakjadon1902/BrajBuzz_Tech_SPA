
// import { useState, useEffect } from 'react';
// import { Play, Users, Video, Eye, Bell, CheckCircle, MoreVertical } from "lucide-react";

// // 🔧 TEMPORARY: Use these for testing (remove in production)
// const YOUTUBE_API_KEY = 'AIzaSyAZQCCi7dAX8ub1xZPbBQjFTzuFpmgCK7o'; 
// const CHANNEL_ID = 'UCby31aj160Uc0u59lvUxlsQ';

// export const YouTubeSection = () => {
//   const [channelStats, setChannelStats] = useState({
//     name: "BrajBuzz Tech",
//     handle: "@BrajBuzzTech",
//     subscribers: "0",
//     totalVideos: "0",
//     totalViews: "0",
//     avatar: "https://yt3.googleusercontent.com/ytc/AIdro_oKq8z7Z0Kzq8z7Z0Kzq8z7Z0Kzq8z7Z0Kzq8z7Z0K=64s64s64s64s64s64s64s64s",
//     banner: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80",
//     isVerified: true,
//   });
//   const [featuredVideos, setFeaturedVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Safe number formatting
//   const formatNumber = (num) => {
//     if (!num) return '0';
//     const n = Number(num);
//     if (isNaN(n)) return '0';
//     if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
//     if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
//     return n.toString();
//   };

//   // Safe duration formatting
//   const formatDuration = (duration) => {
//     try {
//       const match = duration?.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/) || [];
//       const hours = match[1] || '0';
//       const minutes = match[2] || '0';
//       const seconds = match[3] || '0';
//       const parts = [];
//       if (parseInt(hours) > 0) parts.push(hours.padStart(2, '0'));
//       parts.push(minutes.padStart(2, '0'), seconds.padStart(2, '0'));
//       return parts.join(':');
//     } catch {
//       return '0:00';
//     }
//   };

//   // Safe date formatting
//   const formatDate = (dateString) => {
//     try {
//       const date = new Date(dateString);
//       if (isNaN(date.getTime())) return 'Recent';
//       const now = new Date();
//       const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
//       if (diffDays === 0) return 'Today';
//       if (diffDays === 1) return '1 day ago';
//       return `${diffDays} days ago`;
//     } catch {
//       return 'Recent';
//     }
//   };

//   useEffect(() => {
//     console.log('🟢 YouTubeSection mounted');
    
//     const fetchYouTubeData = async () => {
//       try {
//         setLoading(true);
//         setError('');
//         console.log('🔄 Fetching YouTube data...');

//         // 1. Channel data
//         console.log('📺 Fetching channel...');
//         const channelResponse = await fetch(
//           `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
//         );
        
//         if (!channelResponse.ok) {
//           throw new Error(`HTTP ${channelResponse.status}`);
//         }
        
//         const channelData = await channelResponse.json();
//         console.log('✅ Channel data:', channelData);

//         if (channelData.items?.[0]) {
//           const channel = channelData.items[0];
//           const stats = channel.statistics || {};
          
//           setChannelStats({
//             name: channel.snippet.title || 'BrajBuzz Tech',
//             handle: '@BrajBuzzTech',
//             subscribers: formatNumber(stats.subscriberCount),
//             totalVideos: stats.videoCount || '0',
//             totalViews: formatNumber(stats.viewCount),
//             avatar: channel.snippet.thumbnails?.default?.url || channelStats.avatar,
//             banner: channelStats.banner,
//             isVerified: true,
//           });
//         }

//         // 2. Videos data
//         console.log('🎥 Fetching videos...');
//         const videosResponse = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=6&order=date&type=video&key=${YOUTUBE_API_KEY}`
//         );

//         if (!videosResponse.ok) {
//           console.warn('⚠️ Videos fetch failed, showing mock data');
//           setFeaturedVideos([
//             { id: 'abc123', title: 'Tech Review Demo', thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg', views: '1K', date: 'Today', duration: '5:23' }
//           ]);
//         } else {
//           const videosData = await videosResponse.json();
//           console.log('✅ Videos data:', videosData);
          
//           if (videosData.items?.length > 0) {
//             setFeaturedVideos(
//               videosData.items.slice(0, 6).map(item => ({
//                 id: item.id.videoId,
//                 title: item.snippet.title,
//                 thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
//                 views: 'New',
//                 date: formatDate(item.snippet.publishedAt),
//                 duration: '?:??',
//               }))
//             );
//           }
//         }

//         setLoading(false);
//         console.log('🎉 YouTube data loaded successfully');
//       } catch (err) {
//         console.error('❌ YouTube Error:', err);
//         setError('Failed to load YouTube data');
//         setLoading(false);
        
//         // Show mock data even on error
//         setFeaturedVideos([
//           { id: 'demo1', title: 'Subscribe for Tech Reviews!', thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg', views: '1K', date: 'Today', duration: '5:23' }
//         ]);
//       }
//     };

//     fetchYouTubeData();
//   }, []);

//   // Debug render
//   console.log('🔍 Rendering:', { loading, error, videos: featuredVideos.length });

//   return (
//     <section id="youtube" className="py-20 bg-black min-h-screen">
      

//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
//             <Play size={16} className="text-red-400" />
//             <span className="text-red-300 text-sm font-medium">YouTube Channel</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Watch on <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">YouTube</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Subscribe for honest tech reviews, unboxings, and comparisons
//           </p>
//         </div>

//         {/* Channel Header */}
//         <div className="bg-gradient-to-b from-gray-900/50 to-black rounded-3xl p-8 mb-12 border border-gray-800/50">
//           <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
//             <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full ring-4 ring-red-600/30 shadow-2xl flex-shrink-0">
//               <img src={channelStats.avatar} alt="Channel" className="w-full h-full object-cover rounded-full" />
//             </div>
//             <div className="flex-1">
//               <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{channelStats.name}</h3>
//               <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
//                 <span className="text-red-400 font-semibold">{channelStats.subscribers} subscribers</span>
//                 <span>•</span>
//                 <span>{channelStats.totalVideos} videos</span>
//                 <span>•</span>
//                 <span>{channelStats.totalViews} views</span>
//               </div>
//               <a href="https://youtube.com/@BrajBuzzTech" target="_blank" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all">
//                 <Play size={18} />
//                 Subscribe
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Videos Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {loading ? (
//             Array.from({length: 6}).map((_, i) => (
//               <div key={i} className="animate-pulse bg-gray-900 rounded-2xl p-6">
//                 <div className="w-full h-48 bg-gray-800 rounded-xl mb-4"></div>
//                 <div className="h-5 bg-gray-800 rounded w-3/4 mb-2"></div>
//                 <div className="h-4 bg-gray-800 rounded w-1/2"></div>
//               </div>
//             ))
//           ) : featuredVideos.map((video) => (
//             <a key={video.id} href={`https://youtube.com/watch?v=${video.id}`} target="_blank" className="group block">
//               <div className="relative overflow-hidden rounded-2xl aspect-video bg-gray-900 mb-4 group-hover:scale-[1.02] transition-all duration-300">
//                 <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
//                 <span className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs text-white font-medium">
//                   {video.duration}
//                 </span>
//               </div>
//               <h4 className="font-semibold text-white line-clamp-2 mb-2 group-hover:text-red-400 transition-colors">{video.title}</h4>
//               <p className="text-sm text-gray-500">{video.views} • {video.date}</p>
//             </a>
//           ))}
//         </div>

//         {!loading && (
//           <div className="text-center mt-16">
//             <a href="https://youtube.com/@BrajBuzzTech" target="_blank" className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-red-500/25 transition-all">
//               <Play size={24} />
//               View All Videos
//             </a>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };


import { useState, useEffect } from 'react';
import { Play, Users, Video, Eye, Bell, CheckCircle, MoreVertical } from "lucide-react";

// 🔧 TEMPORARY: Use these for testing (remove in production)
const YOUTUBE_API_KEY = 'AIzaSyAZQCCi7dAX8ub1xZPbBQjFTzuFpmgCK7o'; 
const CHANNEL_ID = 'UCby31aj160Uc0u59lvUxlsQ';

export const YouTubeSection = () => {
  const [channelStats, setChannelStats] = useState({
    name: "BrajBuzz Tech",
    handle: "@BrajBuzzTech",
    subscribers: "0",
    totalVideos: "0",
    totalViews: "0",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_oKq8z7Z0Kzq8z7Z0Kzq8z7Z0Kzq8z7Z0Kzq8z7Z0K=64s64s64s64s64s64s64s64s",
    banner: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80",
    isVerified: true,
  });
  const [featuredVideos, setFeaturedVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Safe number formatting
  const formatNumber = (num) => {
    if (!num) return '0';
    const n = Number(num);
    if (isNaN(n)) return '0';
    if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return n.toString();
  };

  // Safe duration formatting
  const formatDuration = (duration) => {
    try {
      const match = duration?.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/) || [];
      const hours = match[1] || '0';
      const minutes = match[2] || '0';
      const seconds = match[3] || '0';
      const parts = [];
      if (parseInt(hours) > 0) parts.push(hours.padStart(2, '0'));
      parts.push(minutes.padStart(2, '0'), seconds.padStart(2, '0'));
      return parts.join(':');
    } catch {
      return '0:00';
    }
  };

  // Safe date formatting
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Recent';
      const now = new Date();
      const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
      if (diffDays === 0) return 'Today';
      if (diffDays === 1) return '1 day ago';
      return `${diffDays} days ago`;
    } catch {
      return 'Recent';
    }
  };

  useEffect(() => {
    console.log('🟢 YouTubeSection mounted');
    
    const fetchYouTubeData = async () => {
      try {
        setLoading(true);
        setError('');
        console.log('🔄 Fetching YouTube data...');

        // 1. Channel data
        console.log('📺 Fetching channel...');
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
        );
        
        if (!channelResponse.ok) {
          throw new Error(`HTTP ${channelResponse.status}`);
        }
        
        const channelData = await channelResponse.json();
        console.log('✅ Channel data:', channelData);

        if (channelData.items?.[0]) {
          const channel = channelData.items[0];
          const stats = channel.statistics || {};
          
          setChannelStats({
            name: channel.snippet.title || 'BrajBuzz Tech',
            handle: '@BrajBuzzTech',
            subscribers: formatNumber(stats.subscriberCount),
            totalVideos: stats.videoCount || '0',
            totalViews: formatNumber(stats.viewCount),
            avatar: channel.snippet.thumbnails?.default?.url || channelStats.avatar,
            banner: channelStats.banner,
            isVerified: true,
          });
        }

        // 2. Search for latest videos (returns videoIds but NO duration)
        console.log('🎥 Fetching videos...');
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=6&order=date&type=video&key=${YOUTUBE_API_KEY}`
        );

        if (!videosResponse.ok) {
          console.warn('⚠️ Videos fetch failed, showing mock data');
          setFeaturedVideos([
            { id: 'abc123', title: 'Tech Review Demo', thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg', views: '1K', date: 'Today', duration: '5:23' }
          ]);
        } else {
          const videosData = await videosResponse.json();
          console.log('✅ Videos data:', videosData);

          if (videosData.items?.length > 0) {
            // 3. Extract video IDs to fetch durations separately
            const videoIds = videosData.items
              .map(item => item.id.videoId)
              .filter(Boolean)
              .join(',');

            // 4. Fetch contentDetails (duration) + statistics (views) for all videos in one call
            const detailsResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
            );

            const detailsData = detailsResponse.ok ? await detailsResponse.json() : null;
            console.log('✅ Video details:', detailsData);

            // Build a map of videoId -> { duration, views }
            const detailsMap = {};
            if (detailsData?.items) {
              detailsData.items.forEach(item => {
                detailsMap[item.id] = {
                  duration: formatDuration(item.contentDetails?.duration),
                  views: formatNumber(item.statistics?.viewCount),
                };
              });
            }

            setFeaturedVideos(
              videosData.items.slice(0, 6).map(item => {
                const videoId = item.id.videoId;
                const details = detailsMap[videoId] || {};
                return {
                  id: videoId,
                  title: item.snippet.title,
                  thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
                  views: details.views || 'New',
                  date: formatDate(item.snippet.publishedAt),
                  duration: details.duration || '0:00',
                };
              })
            );
          }
        }

        setLoading(false);
        console.log('🎉 YouTube data loaded successfully');
      } catch (err) {
        console.error('❌ YouTube Error:', err);
        setError('Failed to load YouTube data');
        setLoading(false);
        
        // Show mock data even on error
        setFeaturedVideos([
          { id: 'demo1', title: 'Subscribe for Tech Reviews!', thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg', views: '1K', date: 'Today', duration: '5:23' }
        ]);
      }
    };

    fetchYouTubeData();
  }, []);

  // Debug render
  console.log('🔍 Rendering:', { loading, error, videos: featuredVideos.length });

  return (
    <section id="youtube" className="py-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
            <Play size={16} className="text-red-400" />
            <span className="text-red-300 text-sm font-medium">YouTube Channel</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Watch on <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">YouTube</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Subscribe for honest tech reviews, unboxings, and comparisons
          </p>
        </div>

        {/* Channel Header */}
        <div className="bg-gradient-to-b from-gray-900/50 to-black rounded-3xl p-8 mb-12 border border-gray-800/50">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full ring-4 ring-red-600/30 shadow-2xl flex-shrink-0">
              <img src={channelStats.avatar} alt="Channel" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{channelStats.name}</h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="text-red-400 font-semibold">{channelStats.subscribers} subscribers</span>
                <span>•</span>
                <span>{channelStats.totalVideos} videos</span>
                <span>•</span>
                <span>{channelStats.totalViews} views</span>
              </div>
              <a href="https://youtube.com/@BrajBuzzTech" target="_blank" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all">
                <Play size={18} />
                Subscribe
              </a>
            </div>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({length: 6}).map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-900 rounded-2xl p-6">
                <div className="w-full h-48 bg-gray-800 rounded-xl mb-4"></div>
                <div className="h-5 bg-gray-800 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-800 rounded w-1/2"></div>
              </div>
            ))
          ) : featuredVideos.map((video) => (
            <a key={video.id} href={`https://youtube.com/watch?v=${video.id}`} target="_blank" className="group block">
              <div className="relative overflow-hidden rounded-2xl aspect-video bg-gray-900 mb-4 group-hover:scale-[1.02] transition-all duration-300">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                <span className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs text-white font-medium">
                  {video.duration}
                </span>
              </div>
              <h4 className="font-semibold text-white line-clamp-2 mb-2 group-hover:text-red-400 transition-colors">{video.title}</h4>
              <p className="text-sm text-gray-500">{video.views} • {video.date}</p>
            </a>
          ))}
        </div>

        {!loading && (
          <div className="text-center mt-16">
            <a href="https://youtube.com/@BrajBuzzTech" target="_blank" className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-red-500/25 transition-all">
              <Play size={24} />
              View All Videos
            </a>
          </div>
        )}
      </div>
    </section>
  );
};