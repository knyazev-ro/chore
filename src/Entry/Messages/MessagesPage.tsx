import CommentaryArea from "../../Components/Comments/CommentaryArea";
import CommentBox from "../../Components/Comments/CommentBox";
import ChatLeftBar from "../../Components/Messages/ChatRightBar/ChatLeftBar";
import MessageListCard from "../../Components/Messages/ChatList/MessageListCard/MessageListCard";
import PageTemplate from "../../Components/PageTemplates/PageTemplate";
import ChatList from "../../Components/Messages/ChatList/ChatList";
import MessageLayout from "../../Components/Layouts/MessageLayout";

export default function MessagesPage() {
  const conversation = [
    {
      id: 1,
      author: {
        id: 101,
        full_name: "J. Cole",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      isMe: true,
      response:
        "Man, this what we doin’ now? Airing out real-life shit in front of millions?",
      reactions: [
        { id: 1, reaction: "🤦‍♂️", who: [101] },
        { id: 2, reaction: "💯", who: [102, 103] },
      ],
      created_at: "10:15:30 03/07/2025",
    },
    {
      id: 2,
      author: {
        id: 102,
        full_name: "Kendrick Lamar",
        avatar: "https://randomuser.me/api/portraits/men/50.jpg",
      },
      isMe: false,
      response:
        "Cole, this ain't no playground beef. Man’s been throwin’ shots for YEARS, hidin’ behind subtext. I just put a name on it.",
      reactions: [
        { id: 3, reaction: "🔥", who: [102] },
        { id: 4, reaction: "🎯", who: [103] },
      ],
      created_at: "10:16:45 03/07/2025",
    },
    {
      id: 3,
      author: {
        id: 103,
        full_name: "Drake",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      },
      isMe: false,
      response:
        "Nah, what you did was tell bedtime stories. You rappin’ about my son, my moms, my life like TMZ. Where’s the bars, Kung Fu Kenny?",
      reactions: [
        { id: 5, reaction: "😂", who: [101, 103] },
        { id: 6, reaction: "🎤", who: [102] },
      ],
      created_at: "10:18:10 03/07/2025",
    },
    {
      id: 4,
      author: {
        id: 101,
        full_name: "J. Cole",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      isMe: true,
      response:
        "Damn. I ain't seen this kinda energy since Ether vs. Takeover.",
      reactions: [
        { id: 7, reaction: "👀", who: [101, 103] },
        { id: 8, reaction: "💯", who: [102] },
      ],
      created_at: "10:19:45 03/07/2025",
    },
    {
      id: 5,
      author: {
        id: 102,
        full_name: "Kendrick Lamar",
        avatar: "https://randomuser.me/api/portraits/men/50.jpg",
      },
      isMe: false,
      response:
        "You want bars? Bet. I just laid the blueprint. Next time, I’ll dig deeper. Maybe I'll call up Sophie. Or Adonis. Let them tell their side.",
      reactions: [
        { id: 9, reaction: "💀", who: [102] },
        { id: 10, reaction: "🔍", who: [101, 103] },
      ],
      created_at: "10:21:10 03/07/2025",
    },
    {
      id: 6,
      author: {
        id: 103,
        full_name: "Drake",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      },
      isMe: false,
      response:
        "LMAO. Y’all see this? When I was buildin’ an empire, this man was sittin’ in his basement, thinkin’ of how to expose me. Ain’t that obsession?",
      reactions: [
        { id: 11, reaction: "😂", who: [101] },
        { id: 12, reaction: "🧊", who: [102, 103] },
      ],
      created_at: "10:23:30 03/07/2025",
    },
    {
      id: 7,
      author: {
        id: 101,
        full_name: "J. Cole",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      isMe: true,
      response:
        "I ain’t gon’ lie, this might be the biggest rap war of the decade. Y’all gotta finish it right.",
      reactions: [
        { id: 13, reaction: "🍿", who: [101, 102] },
        { id: 14, reaction: "🔥", who: [103] },
      ],
      created_at: "10:25:10 03/07/2025",
    },
    {
      id: 8,
      author: {
        id: 102,
        full_name: "Kendrick Lamar",
        avatar: "https://randomuser.me/api/portraits/men/50.jpg",
      },
      isMe: false,
      response:
        "I already did. *Meet the Grahams* is a classic. ‘Not Like Us’ got the clubs lit. Man’s career already on the ropes.",
      reactions: [
        { id: 15, reaction: "🎶", who: [102] },
        { id: 16, reaction: "🔪", who: [101] },
      ],
      created_at: "10:26:45 03/07/2025",
    },
    {
      id: 9,
      author: {
        id: 103,
        full_name: "Drake",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      },
      isMe: false,
      response:
        "You think I ain’t got something loaded? Enjoy the moment, Ken. You ‘bout to find out why I run this game.",
      reactions: [
        { id: 17, reaction: "🔥", who: [101, 103] },
        { id: 18, reaction: "🎭", who: [102] },
      ],
      created_at: "10:28:20 03/07/2025",
    },
    {
      id: 10,
      author: {
        id: 101,
        full_name: "J. Cole",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      isMe: true,
      response: "S**t, guess I’ma just sit back and let history write itself.",
      reactions: [
        { id: 19, reaction: "🍿", who: [101, 102, 103] },
        {
          id: 20,
          reaction: "👀",
          who: [
            101, 104, 105, 106, 107, 108, 104, 105, 106, 107, 108, 104, 105,
            106, 107, 108,
          ],
        },
      ],
      created_at: "10:30:40 03/07/2025",
    },
  ];

  const allAuthorsInConversation = conversation
    .map((e) => e.author)
    .filter((value, index, array) => {
      let idx = -1;
      for (let i = 0; i < array.length; ++i) {
        if (array[i].id === value.id) {
          idx = i;
          break;
        }
      }
      return idx === index;
    });


  const chats = [
    {
      name: "Lilly Thompson",
      avatar: "https://i.pravatar.cc/150?img=1",
      lastMessage: "Hey, this was really rude!",
    },
    {
      name: "Marcus Rivera",
      avatar: "https://i.pravatar.cc/150?img=2",
      lastMessage: "Did you check the docs I sent?",
    },
    {
      name: "System Notification",
      avatar: "https://cdn-icons-png.flaticon.com/512/1827/1827379.png",
      lastMessage: "Your account settings have been updated.",
    },
    {
      name: "Emily Carter",
      avatar: "https://i.pravatar.cc/150?img=3",
      lastMessage: "I'll be there in 10 minutes!",
    },
    {
      name: "Jake Henderson",
      avatar: "https://i.pravatar.cc/150?img=4",
      lastMessage: "Haha, that's hilarious! 😂",
    },
    {
      name: "Project Team",
      avatar: "https://cdn-icons-png.flaticon.com/512/3067/3067269.png",
      lastMessage: "Reminder: Meeting at 3 PM.",
    },
    {
      name: "Unknown Number",
      avatar: "https://cdn-icons-png.flaticon.com/512/595/595067.png",
      lastMessage: "You have a new voice message.",
    },
    {
      name: "Anna Delgado",
      avatar: "https://i.pravatar.cc/150?img=5",
      lastMessage: "Thanks for your help today!",
    },
    {
      name: "Chris Evans",
      avatar: "https://i.pravatar.cc/150?img=10",
      lastMessage: "Hey, are you free this weekend?",
    },
    {
      name: "Sophia Martinez",
      avatar: "https://i.pravatar.cc/150?img=7",
      lastMessage: "Let's grab a coffee sometime ☕",
    },
    {
      name: "Gaming Squad",
      avatar: "https://cdn-icons-png.flaticon.com/512/3616/3616640.png",
      lastMessage: "Who's up for a match tonight?",
    },
    {
      name: "Ethan Brooks",
      avatar: "https://i.pravatar.cc/150?img=8",
      lastMessage: "I can't believe that happened!",
    },
    {
      name: "Olivia Clarke",
      avatar: "https://i.pravatar.cc/150?img=9",
      lastMessage: "How was your trip?",
    },
    {
      name: "Tech Support",
      avatar: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
      lastMessage: "Your ticket #23456 has been resolved.",
    },
    {
      name: "Michael Scott",
      avatar: "https://i.pravatar.cc/150?img=10",
      lastMessage: "That's what she said!",
    },
  ];

  return (
    <MessageLayout>
      <div className="absolute flex w-screen h-full max-h-full">
        <ChatList chats={chats} />
        <div className="flex flex-col w-full max-h-full h-full bg-stone-950">
          <div className="overflow-y-scroll custom-scroll">
            <CommentBox
              conversation={conversation}
              authors={allAuthorsInConversation}
            />
          </div>
          <CommentaryArea />
        </div>

        <ChatLeftBar chatActiveIcon={{}} />
      </div>
    </MessageLayout>
  );
}
