export type PostID = number;

export type AuthorAttributesData = {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
};

export type PostAuthor = {
    data: {
        id: PostID;
        attributes: AuthorAttributesData;
    };
};

export type CategoryAttributesData = {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
};

export type PostCategory = {
    data: {
        id: PostID;
        attributes: CategoryAttributesData;
    };
};

export type PostCreatedBy = {
    id: PostID;
    firstname: string;
    lastname: string;
    username: null;
};

export type PostCoverFormat = {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    };
};

export type PostCover = PostCoverFormat & {
    data: {
        id: PostID;
        attributes: {
            alternativeText: string;
            caption: string;
            previewUrl: null;
            provider: string;
            created_by: number;
            updated_by: number;
            created_at: string;
            updated_at: string;
            url: string;
            formats: {
                thumbnail: PostCoverFormat;
                small: PostCoverFormat;
                medium: PostCoverFormat;
                large: PostCoverFormat;
            };
        };
    };
};

export type PostAttributesData = {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: PostCover;
    author: PostAuthor;
    category: PostCategory;
};

export type PostData = {
    id: PostID;
    attributes: PostAttributesData;
    content: string;
};
