import { motion } from 'framer-motion'
import { MapPin, Clock } from 'lucide-react'
import { cn } from '@/utils/cn'
import { GlassCard } from './GlassCard'
import { fadeUp, fadeLeft, fadeRight, VIEWPORT } from '@/constants/motion'
import type { TimelineEvent } from '@/data/timeline'

interface TimelineItemProps {
  event: TimelineEvent
  index: number
}

/**
 * One timeline node. Alternates left/right on desktop (lg+),
 * stacks into a single vertical rail on mobile.
 */
export function TimelineItem({ event, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0

  return (
    <div className="relative lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
      {/* Card — column depends on side (desktop) */}
      <motion.div
        variants={isLeft ? fadeRight : fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className={cn(
          'pl-16 lg:pl-0',
          isLeft ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-3 lg:text-left'
        )}
      >
        <GlassCard
          glow
          className={cn('p-6', event.highlight && 'border-ember-400/40 shadow-ember')}
        >
          <div
            className={cn(
              'flex items-center gap-3',
              isLeft ? 'lg:flex-row-reverse lg:text-right' : ''
            )}
          >
            <span className="text-2xl" aria-hidden>
              {event.emoji}
            </span>
            <h3 className="text-lg font-semibold text-ember-50">{event.title}</h3>
          </div>
          {event.description && (
            <p
              className={cn(
                'mt-2 text-sm leading-relaxed text-ember-50/55',
                isLeft ? 'lg:text-right' : 'lg:text-left'
              )}
            >
              {event.description}
            </p>
          )}
          <div
            className={cn(
              'mt-3 flex flex-col gap-1.5 text-sm text-ember-50/65',
              isLeft ? 'lg:items-end' : 'lg:items-start'
            )}
          >
            {event.date && (
              <span className="font-medium text-ember-300">{event.date}</span>
            )}
            {event.time && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {event.time}
              </span>
            )}
            {event.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> {event.location}
              </span>
            )}
          </div>
        </GlassCard>
      </motion.div>

      {/* Center node */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="absolute left-6 top-7 -translate-x-1/2 lg:static lg:col-start-2 lg:translate-x-0"
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span
            className={cn(
              'absolute inline-flex h-full w-full rounded-full opacity-60',
              event.highlight ? 'animate-ping bg-ember-400' : 'bg-punch-400/50'
            )}
          />
          <span
            className={cn(
              'relative h-3.5 w-3.5 rounded-full ring-4 ring-night-900',
              event.highlight
                ? 'bg-gradient-to-br from-ember-400 to-punch-500'
                : 'bg-ember-400'
            )}
          />
        </span>
      </motion.div>

      {/* Spacer for the opposite column on desktop */}
      <div className={cn('hidden lg:block', isLeft ? 'lg:col-start-3' : 'lg:col-start-1')} />
    </div>
  )
}
