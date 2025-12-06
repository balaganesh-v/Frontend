'use client'
import TeacherDetail from '@/pages/teachers/[id]'

export default function Page(props) {
  // Pass through props; the original component reads router params internally
  return <TeacherDetail {...props} />
}
