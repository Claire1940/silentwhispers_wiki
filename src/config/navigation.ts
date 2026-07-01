import type { LucideIcon } from 'lucide-react'
import {
	BookOpen,
	Bell,
	Calendar,
	Mic,
	Monitor,
	Users,
} from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'release' -> t('nav.release')
	path: string // URL 路径，如 '/release'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

// 导航配置：6 个内容分类（与 content/ 实际目录一一对应）
// release / platforms / preregister / characters / voices / guide
export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'release', path: '/release', icon: Calendar, isContentType: true },
	{ key: 'platforms', path: '/platforms', icon: Monitor, isContentType: true },
	{ key: 'preregister', path: '/preregister', icon: Bell, isContentType: true },
	{ key: 'characters', path: '/characters', icon: Users, isContentType: true },
	{ key: 'voices', path: '/voices', icon: Mic, isContentType: true },
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
) // 移除开头的 '/' -> ['release', 'platforms', 'preregister', 'characters', 'voices', 'guide']

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
