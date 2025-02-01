import { memo } from "react"
import { AboutContentProps } from "@/types/about"
import { Badge } from "@/components/ui/badge"

const AboutContent = memo(
  ({ content, skills, experience }: AboutContentProps) => {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        {/* Bio Section */}
        <div className="mb-12">
          <div className="prose max-w-none">
            {Array.isArray(content) ? (
              content.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-gray-600 leading-relaxed mb-4">{content}</p>
            )}
          </div>
        </div>

        {/* Skills Section */}
        {skills && Object.keys(skills).length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, categorySkills]) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-700 capitalize">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="hover:bg-gray-200 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Section */}
        {experience && experience.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="border-l-2 border-gray-200 pl-4 pb-8 last:pb-0"
                >
                  <h3 className="font-medium text-gray-900">{job.position}</h3>
                  <p className="text-gray-600 mb-1">{job.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{job.years}</p>
                  {job.description && (
                    <p className="text-gray-600 text-sm">{job.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
)

AboutContent.displayName = "AboutContent"

export default AboutContent
