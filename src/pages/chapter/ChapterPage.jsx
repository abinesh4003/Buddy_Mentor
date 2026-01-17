import React from 'react';
import { useParams } from 'react-router-dom';
import WisdomTree from './sections/WisdomTree';

const ChapterPage = () => {
    const { chapterId, subjectId, moduleId } = useParams();
    
    return (
        <div className="container mx-auto px-4 py-8">
            {/* <div className="bg-white rounded-lg shadow-lg p-6">
                <nav className="text-sm breadcrumbs mb-6">
                    <span className="text-gray-500">Subject {subjectId}</span>
                    <span className="mx-2">/</span>
                    <span className="text-gray-500">Module {moduleId}</span>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-medium">Chapter {chapterId}</span>
                </nav>

                <h1 className="text-3xl font-bold mb-6">Chapter {chapterId}</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-2">
                        <div className="prose max-w-none">
                            <h2 className="text-xl font-semibold mb-4">Chapter Content</h2> */}
                            {/* Chapter content goes here */}
                        {/* </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold mb-3">Chapter Resources</h3>
                            <ul className="space-y-2"> */}
                                {/* Resource links go here */}
                            {/* </ul>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold mb-3">Quick Navigation</h3>
                            <div className="flex justify-between">
                                <button className="text-blue-600 hover:text-blue-800">
                                    ← Previous Chapter
                                </button>
                                <button className="text-blue-600 hover:text-blue-800">
                                    Next Chapter →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <WisdomTree subjectid={subjectId} moduleid={moduleId} chapterid={chapterId}/>

        </div>
    );
}

export default ChapterPage;
