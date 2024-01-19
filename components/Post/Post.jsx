import styled from 'styled-components/native';

const PostView = styled.View`
    flex-direction: row;
    padding: 20px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
`;

const PostImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 12px;
    margin-right: 12px;
    margin-top: 22px;
`;

const PostTitle = styled.Text`
    font-size: 16px;
    font-weight: 700;
`;

const PostDate = styled.Text`
    font-size: 11px;
    font-weight: 700;
    color: gray;
`;

const PostDetails = styled.View`
    justify-content: center;
    flex: 1;
`;

const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + '...';
  }

  return str;
};

export const Post = ({title, imageUrl, createdAt}) => {
  return (
   <PostView>
     <PostImage source={{uri: imageUrl}}/>
     <PostDetails>
       <PostTitle>{truncateTitle(title)}</PostTitle>
       <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
     </PostDetails>
   </PostView>
  );
};