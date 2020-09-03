import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';
import { ChapterService } from '../../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-twelve',
  templateUrl: './chapter-twelve.component.html',
  styleUrls: ['./chapter-twelve.component.css']
})
export class ChapterTwelveComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  side =[{linkid: 'hnu', body: 'WHAT IS WEIRD?', jump: 'WhatisWeirdheader'}, {linkid: 'h', body: 'ANATOMY OF A SPELL', jump: 'AnatomyofaSheader'}, {linkid: 'hg', body: 'SHAPING A SPELL', jump: 'ShapingaSpeltqZGWllgGc'}, {linkid: 'hg', body: 'FALLOUT', jump: 'FallouthrzHKpwWiO'}, {linkid: 'h', body: 'WEIRD TRADITIONS', jump: 'WeirdTraditioheader'}, {linkid: 'hg', body: 'ANIMISM ', jump: 'AnimismhcVtgGOMJr'}, {linkid: 'hg', body: 'CALLING ', jump: 'CallingRXXilDMvXe'}, {linkid: 'hg', body: 'CHARM ', jump: 'CharmRCGPkJuWOk'}, {linkid: 'hg', body: 'GLAMOUR', jump: 'GlamourxMnTOHHfVb'}, {linkid: 'hg', body: 'INVESTITURE ', jump: 'InvestitureMlojNGKaSP'}, {linkid: 'hg', body: 'OCCULTISM ', jump: 'OccultismwLoDAEQpqG'}, {linkid: 'hg', body: 'SORTILEGE ', jump: 'SortilegeZRNuaJokYI'}, {linkid: 'hnu', body: 'ACQUIRING RUDIMENTS', jump: 'AcquiringRudiheader'}, {linkid: 'h', body: 'SHAPE RUDIMENT DESCRIPTIONS', jump: 'ShapeRudimentheader'}, {linkid: 'hg', body: 'CIRCLE', jump: 'CirclepEqxTfcvaE'}, {linkid: 'hg', body: 'CHAIN', jump: 'ChainiusVbmNroR'}, {linkid: 'hg', body: 'CONE', jump: 'ConeJSwfoAtQtP'}, {linkid: 'hg', body: 'SALVO', jump: 'SalvoIvQgXdvNLH'}, {linkid: 'hg', body: 'SPHERE', jump: 'SphereIPrzRZEESU'}, {linkid: 'hg', body: 'RAY', jump: 'RayKxhXMpWyoE'}, {linkid: 'hg', body: 'WALL', jump: 'WallkiJqVhiQqW'}, {linkid: 'h', body: 'RANGE RUDIMENT DESCRIPTIONS', jump: 'RangeRudimentheader'}, {linkid: 'hg', body: 'DOUBLE', jump: 'DoublenDSnnAyiRu'}, {linkid: 'hg', body: 'FULL', jump: 'FullqFyZdaHzeY'}, {linkid: 'hg', body: 'HALF', jump: 'HalfKqFcOhxdDp'}, {linkid: 'hg', body: 'PERSONAL', jump: 'PersonalPjCBdhfMSW'}, {linkid: 'h', body: 'ORIGIN RUDIMENT DESCRIPTIONS', jump: 'OriginRudimenheader'}, {linkid: 'hg', body: 'AURA', jump: 'AuraOUFgzbjfAR'}, {linkid: 'hg', body: 'TOUCH', jump: 'TouchUMWUtniYbd'}, {linkid: 'hg', body: 'NEAR', jump: 'NearbEnVTSrDJW'}, {linkid: 'hg', body: 'FAR', jump: 'FarnpzBfOwlvI'}, {linkid: 'h', body: 'EFFECT RUDIMENT DESCRIPTIONS', jump: 'EffectRudimenheader'}, {linkid: 'hg', body: 'ALARM', jump: 'AlarmOKIizLfKxi'}, {linkid: 'hg', body: 'ALTO SCREAM', jump: 'AltoScreamfyKTlGJXvO'}, {linkid: 'hg', body: 'ANCESTRAL LORE', jump: 'AncestralLoreZsTlirTafc'}, {linkid: 'hg', body: 'ANIMATE CORPSE', jump: 'AnimateCorpseekrgnLjRPU'}, {linkid: 'hg', body: 'ARCANE VORTEX', jump: 'ArcaneVortexDYsuLZNFYA'}, {linkid: 'hg', body: 'AUGUR SECRET', jump: 'AugurSecretkUwYvgChRP'}, {linkid: 'hg', body: 'BANISH', jump: 'BanishPAPueIgTOp'}, {linkid: 'hg', body: 'BAR PORTAL', jump: 'BarPortalhoPTCtAHRA'}, {linkid: 'hg', body: 'BESTIAL SIGHT', jump: 'BestialSightSognMGxsPb'}, {linkid: 'hg', body: 'BIND DEMON', jump: 'BindDemonvinRxMVOtw'}, {linkid: 'hg', body: 'BIND ELEMENTAL HEART', jump: 'BindElementalXbGskxqtKX'}, {linkid: 'hg', body: 'BIND TO THE AVERAGE', jump: 'BindtotheAvWefNRGnXaG'}, {linkid: 'hg', body: 'BINDING GLYPH', jump: 'BindingGlyphvAVpOEdwOI'}, {linkid: 'hg', body: 'BURDEN', jump: 'BurdenBepuzqJdjC'}, {linkid: 'hg', body: 'BREAK SUMMONING', jump: 'BreakSummoninYdtKrqNiBe'}, {linkid: 'hg', body: 'CHARISMATIC GLAMOUR', jump: 'CharismaticGlZVMIVmgnfN'}, {linkid: 'hg', body: 'CORPSE HIDE', jump: 'CorpseHideLRzZiJcglm'}, {linkid: 'hg', body: 'CORPSE TONGUE', jump: 'CorpseTonguePafJcibxeY'}, {linkid: 'hg', body: 'DISCOMBOBULATE', jump: 'DiscombobulatedaWzsLBYvK'}, {linkid: 'hg', body: 'DISPEL ENCHANTMENT', jump: 'DispelEnchantZJbLpEJAcX'}, {linkid: 'hg', body: 'DARKNESS', jump: 'DarknessjBvCdCrPGS'}, {linkid: 'hg', body: 'DEATHWATCH', jump: 'DeathwatchAqLSkfubvh'}, {linkid: 'hg', body: 'DETECT MAGIC', jump: 'DetectMagiczITZYUgUxJ'}, {linkid: 'hg', body: 'DIVINE OBJECT', jump: 'DivineObjectxcjyoQWXUo'}, {linkid: 'hg', body: 'DOPPELGANGER', jump: 'DoppelgangeryVqzgWUDoR'}, {linkid: 'hg', body: 'DOMINATE', jump: 'DominateDGzvAAMjkA'}, {linkid: 'hg', body: 'DREAM STRIDE', jump: 'DreamStridegakzFURyMI'}, {linkid: 'hg', body: 'ENDOW WITH POWER', jump: 'EndowWithPowKSCzNpArjl'}, {linkid: 'hg', body: 'ESSENCE LINK', jump: 'EssenceLinkEvVXLfDjPL'}, {linkid: 'hg', body: 'FATE WELL', jump: 'FateWelluPSHjSCQnK'}, {linkid: 'hg', body: 'FLASH BANG', jump: 'FlashBangQDTAIrOaUa'}, {linkid: 'hg', body: 'FLATTEN', jump: 'FlattenpNnGQHCsdm'}, {linkid: 'hg', body: 'FORCE BIND SPIRIT', jump: 'ForceBindSpixeLBIAbpBz'}, {linkid: 'hg', body: 'FORCE PUSH', jump: 'ForcePushhNOCowCLAB'}, {linkid: 'hg', body: 'FORTIFY LUCK', jump: 'FortifyLuckcCgVcwdVxi'}, {linkid: 'hg', body: 'HASTE', jump: 'HasteNPXGlflJwD'}, {linkid: 'hg', body: 'HERMETIC DWEOMER', jump: 'HermeticDweomwppDaYMxbJ'}, {linkid: 'hg', body: 'HEROIC MOMENT', jump: 'HeroicMomentRxcJCEoxji'}, {linkid: 'hg', body: 'HEX', jump: 'HexfYtURajCjj'}, {linkid: 'hg', body: 'HIGH JUMP', jump: 'HighJumpZQLqefccHL'}, {linkid: 'hg', body: 'HINDSIGHT', jump: 'HindsightBHLsnvSHIw'}, {linkid: 'hg', body: 'HOOKGATE', jump: 'HookgateWZyOionxQS'}, {linkid: 'hg', body: 'ICARIAN FLIGHT', jump: 'IcarianFlightrOPCRFKExk'}, {linkid: 'hg', body: 'ILLUMINATE', jump: 'IlluminateujMnsQLGyO'}, {linkid: 'hg', body: 'IMPROBABLE STAIR', jump: 'ImprobableStaebOLhmMcBX'}, {linkid: 'hg', body: 'INFLICT BAD LUCK', jump: 'InflictBadLuQiDAKeCrZP'}, {linkid: 'hg', body: 'INFLICT DOUBT', jump: 'InflictDoubtpQSawPNysI'}, {linkid: 'hg', body: 'INVOKE BELLIGERENCE', jump: 'InvokeBelligeuvSsDcEare'}, {linkid: 'hg', body: 'IRONHIDE', jump: 'IronhidetuYWGBnkdv'}, {linkid: 'hg', body: 'ITEMBIND', jump: 'ItembindYFvnrkicSM'}, {linkid: 'hg', body: 'KINETIC BURST', jump: 'KineticBurstAftgkEELxE'}, {linkid: 'hg', body: 'LEADFEET', jump: 'LeadfeetEttScHimTI'}, {linkid: 'hg', body: 'LOCKDOWN', jump: 'LockdownkPLOcTEOAJ'}, {linkid: 'hg', body: 'LORE MYSTERIUM', jump: 'LoreMysteriumBihEkHwjVn'}, {linkid: 'hg', body: 'LIMINAL PLATFORM', jump: 'LiminalPlatfoxlrqrhTUHz'}, {linkid: 'hg', body: 'MAGIC CIRCLE', jump: 'MagicCircleaRBAYlYITj'}, {linkid: 'hg', body: 'MASK OF ZAL', jump: 'MaskofZalDTkUMIiOxR'}, {linkid: 'hg', body: 'MARIONETTE', jump: 'MarionetteEXERFELgRI'}, {linkid: 'hg', body: 'MIMIC', jump: 'MimicMWeuEtRfmB'}, {linkid: 'hg', body: 'MESSAGE', jump: 'MessagefYeCZylaoq'}, {linkid: 'hg', body: 'MIND WIPE', jump: 'MindWipelETQzzhVMZ'}, {linkid: 'hg', body: 'MISLAY', jump: 'MislaywsigSLseiy'}, {linkid: 'hg', body: 'MYOPIC CURSE', jump: 'MyopicCursemgkLFSoGAn'}, {linkid: 'hg', body: 'MYSTIC MARK', jump: 'MysticMarkmebfVCsOZn'}, {linkid: 'hg', body: 'MYSTICAL SANDING', jump: 'MysticalSandiMHbPfMhLhC'}, {linkid: 'hg', body: 'OUTCRY', jump: 'OutcryTQsIrwJIZG'}, {linkid: 'hg', body: 'PERFUME', jump: 'PerfumemKjYVDwwFq'}, {linkid: 'hg', body: 'PHANTOMBINDING', jump: 'PhantombindingNcpoqkBDAF'}, {linkid: 'hg', body: 'PHASING', jump: 'PhasingcvOJqopiDn'}, {linkid: 'hg', body: 'REBALANCE', jump: 'RebalanceELXNiBMznK'}, {linkid: 'hg', body: 'REORIENT', jump: 'ReorienttTdCHXxmca'}, {linkid: 'hg', body: 'REPAIR', jump: 'RepairSQmDcIeySy'}, {linkid: 'hg', body: 'RICOCHET', jump: 'RicochetqqOHtAmTrT'}, {linkid: 'hg', body: 'SAP POWER', jump: 'SapPoweraiRkCMjfSP'}, {linkid: 'hg', body: 'SCRY', jump: 'ScryCypPomuVor'}, {linkid: 'hg', body: 'SHATTER', jump: 'ShatterKHlwRQkkBa'}, {linkid: 'hg', body: 'SHOCK', jump: 'ShockTIgjzsSiTn'}, {linkid: 'hg', body: 'SHROUD OF INNOCENCE', jump: 'ShroudofInnoBojchRAQsi'}, {linkid: 'hg', body: 'SLOWFALL', jump: 'SlowfalltAgPbzgeqn'}, {linkid: 'hg', body: 'SLOW METABOLISM', jump: 'SlowMetabolisTuCAxaKSbE'}, {linkid: 'hg', body: 'SMOKESCREEN', jump: 'SmokescreenQRJMNHPAnJ'}, {linkid: 'hg', body: 'SILENCE', jump: 'SilencedmnkGkcDCM'}, {linkid: 'hg', body: 'STITCH FLESH', jump: 'StitchFleshGywfOkYEPW'}, {linkid: 'hg', body: 'STRENGTHEN YMIR', jump: 'StrengthenYmiybwJyokevF'}, {linkid: 'hg', body: 'STROBE', jump: 'StrobefoIjGoYQfC'}, {linkid: 'hg', body: 'TELEKINESIS', jump: 'TelekinesiswdKvAVTEOW'}, {linkid: 'hg', body: 'TONGUES', jump: 'TonguesCvNEkaITDp'}, {linkid: 'hg', body: 'TOUCH OF THE OTHERWORLD', jump: 'TouchoftheOuDdUJakzJA'}, {linkid: 'hg', body: 'TURN', jump: 'TurnxcyudVQpNU'}, {linkid: 'hg', body: 'TWIST TONGUE', jump: 'TwistTonguePcXeIZkWss'}, {linkid: 'hg', body: 'VERTIGO', jump: 'VertigohfBrWUCWwa'}, {linkid: 'hg', body: 'VISUAL ILLUSION', jump: 'VisualIllusioYSYNqrkJdG'}, {linkid: 'hg', body: 'WALL WALK', jump: 'WallWalkbapRgylPbw'}, {linkid: 'hg', body: 'WEAPONSHARP', jump: 'WeaponsharpcChQGCVfZo'}, {linkid: 'hg', body: 'WEB', jump: 'WebzdbbIwCrrQ'}]

  ngOnInit(){}

  ngOnDestroy() {
     
    this.chapterName = ''
  }

   

}
