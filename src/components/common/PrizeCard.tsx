import { motion } from 'framer-motion'
import { Trophy, Check } from 'lucide-react'
import { cn } from '@/utils/cn'
import { GlassCard } from './GlassCard'
import { Chip } from './Chip'
import { fadeUp, VIEWPORT } from '@/constants/motion'
import type { Prize, PrizeTier } from '@/data/prizes'

interface PrizeCardProps {
  prize: Prize
  index: number
}

const TIER_CONFIG: Record<
  PrizeTier,
  { ring: string; text: string; gradient: string; glow: string }
> = {
  gold: {
    ring: 'border-ember-400/50',
    text: 'text-ember-300',
    gradient: 'from-ember-400 to-punch-500',
    glow: 'shadow-ember',
  },
  silver: {
    ring: 'border-white/20',
    text: 'text-ember-50/80',
    gradient: 'from-white/70 to-ember-100/60',
    glow: '',
  },
  bronze: {
    ring: 'border-punch-500/40',
    text: 'text-punch-300',
    gradient: 'from-punch-400 to-ember-700',
    glow: '',
  },
}

/** Luxury prize card. The featured (gold) card renders larger & elevated. */
export function PrizeCard({ prize, index }: PrizeCardProps) {
  const cfg = TIER_CONFIG[prize.tier]

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ delay: index * 0.1 }}
      className={cn(
        'h-full',
        prize.featured && 'lg:-mt-8 lg:scale-[1.04] lg:z-10'
      )}
    >
      <GlassCard
        glow
        animatedBorder={prize.featured}
        className={cn('h-full p-8 pb-12', cfg.glow, prize.featured && 'bg-night-700/60')}
      >
        <div className="flex h-full flex-col items-center text-center">
          {prize.featured && (
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-animated px-3 py-1 text-xs font-bold uppercase tracking-wider text-night-900">
              Grand Champion
            </span>
          )}

          {/* Trophy slot — reserved, image-ready. Set `image` on the prize in
              data/prizes.ts to swap this placeholder for the real trophy art;
              spacing stays identical. */}
          <motion.div
            animate={prize.featured ? { y: [0, -8, 0] } : undefined}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className={cn(
              'flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border bg-night-800/60',
              prize.featured ? 'h-24 w-24' : 'h-20 w-20',
              cfg.ring,
              cfg.text
            )}
          >
            {prize.image ? (
              <img
                src={prize.image}
                alt={`${prize.place} trophy`}
                className="h-full w-full object-contain p-1.5"
              />
            ) : (
              <Trophy className={prize.featured ? 'h-11 w-11' : 'h-9 w-9'} strokeWidth={1.5} />
            )}
          </motion.div>

          <span className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-ember-50/55">
            {prize.place}
          </span>

          <span
            className={cn(
              'mt-2 inline-block bg-gradient-to-br bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl',
              cfg.gradient
            )}
          >
            {prize.amount}
          </span>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {prize.perks.map((perk) => (
              <Chip key={perk}>
                <Check className="h-3 w-3 text-ember-400" />
                {perk}
              </Chip>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
