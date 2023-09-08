
export default function responseModule(selectedQuestion) {
    switch (selectedQuestion) {
        case 'option1':
            return (["My name is Heng Yang, I'm a software developer who enjoys creating games, making music, and any kind of creative expression :^)", "I like building things, for example this world you see here! I guess you can say that you're looking into a part of my mind right now!", 'Do you have any other questions?']); 
        case 'option2':
            return (['Why, in my room silly, hehe...', 'But on a more serious note, this is my personal portfolio, where you can interact with my room to learn more about me. :^)',  'Take a look at my shelf to see my other projects and tech stack!', 'Do you have any other questions?']); 
        case 'option3':
            return (['Besides coding, I enjoy 3d modeling in blender - As you can see by my beautiful mustachio ;)','I also enjoy creating music on FL-Studio and spending time with friends and family. :)', 'When I feel like thinking, I code. When I feel like building something, I create in blender. When I want to hear something new, I make music! Three different mediums, but they all fulfill my desire to create!', 'Do you have any other questions?']); 
        default:
            return (["What are you doing inside my room?!! ... Well since you're already here, I'll answer any questions that you may have for me."]);
    }
}